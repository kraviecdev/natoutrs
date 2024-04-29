import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { FormButton, StyledForm } from "./styled.js";
import { SecondaryHeading } from "../Title/index.js";
import { Paragraph } from "../Paragraph/index.js";
import Input from "./Input/index.jsx";
import File from "./File/index.jsx";

const Form = ({
  initialState,
  schema,
  onSubmit,
  $second,
  heading,
  button,
  children,
}) => {
  const defaultValues = async () =>
    Object.fromEntries(
      await initialState.map((item) => [item.name, item.value]),
    );

  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit((data) => onSubmit(data, setError))}
        $second={$second}
      >
        <SecondaryHeading>{heading}</SecondaryHeading>
        {initialState &&
          initialState.map((input, index) =>
            input.type === "file" ? (
              <File
                key={index}
                label={input.label}
                type={input.type}
                {...register(input.name)}
                errorText={errors[input.name]?.message}
                multiple={input.multiple}
                accept={input.accept}
                avatarPath={input.avatarPath}
              />
            ) : (
              <Input
                key={index}
                as={input.as}
                label={input.label}
                {...register(input.name)}
                errorText={errors[input.name]?.message}
                valid={watch(input.name)}
                placeholder={input.placeholder}
                type={input.type}
              />
            ),
          )}
        {errors.root && (
          <Paragraph $italic $invalid>
            {errors.root.message}
          </Paragraph>
        )}
        <FormButton type="submit">{button}</FormButton>
        {children}
      </StyledForm>
      <DevTool control={control} />
    </>
  );
};

export default Form;
