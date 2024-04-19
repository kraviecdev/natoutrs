import { FormButton, StyledForm } from "../common/Form/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import FormRow from "../common/FormRow/index.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

const PageForm = ({
  schema,
  onSubmit,
  $second,
  initialState,
  heading,
  button,
  children,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)} $second={$second}>
        {heading && <SecondaryHeading>{heading}</SecondaryHeading>}
        {initialState &&
          initialState.map((row, index) => (
            <FormRow
              label={row.label}
              register={register(row.name)}
              props={row.props}
              key={index}
              valid={watch(row.name)}
              errorText={errors[row.name]?.message}
            />
          ))}
        <FormButton type="submit">{button}</FormButton>
        {children}
      </StyledForm>
      <DevTool control={control} />
    </>
  );
};

export default PageForm;
