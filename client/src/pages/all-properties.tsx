import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={500} color="#11142d">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
          handleClick={() => navigate("/properties/create")}
        />
      </Stack>
    </Box>
  );
};

export default AllProperties;
