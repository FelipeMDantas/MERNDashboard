import { Star } from "@mui/icons-material";
import {
  useDelete,
  useGetIdentity,
  useOne,
  useShow,
} from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate, useParams } from "@pankod/refine-react-router-v6";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  /*const { queryResult } = useShow();*/

  const { data, isLoading, isError } = useOne({
    resource: "api/v1/properties",
    id: id as string,
  });

  const propertyDetails = data?.data ?? {};

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfc"
      width="fit-content"
    >
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Details
      </Typography>

      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Box flex={1} maxWidth={764}>
          <img
            src={propertyDetails.photo}
            alt={propertyDetails.title}
            height={546}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            className="property_details-img"
          />

          <Box mt="15px">
            <Stack direction="row" justifyContent="space-between">
              <Typography>{propertyDetails.propertyType} </Typography>
              <Box>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />
                ))}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
