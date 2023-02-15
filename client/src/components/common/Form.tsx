import { Box, Typography } from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a property
      </Typography>
    </Box>
  );
};

export default Form;
