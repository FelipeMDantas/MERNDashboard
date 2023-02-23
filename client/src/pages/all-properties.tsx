import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { CustomButton, PropertyCard } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={500} color="#11142d">
            {!allProperties.length
              ? "There are no properties"
              : "All properties"}
          </Typography>
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: "20px", sm: 0 }}
            >
              <CustomButton
                title={`Sort price`}
                backgroundColor="#475be8"
                color="#fcfcfc"
              />
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value=""
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value=""
              >
                <MenuItem value="">All</MenuItem>
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomButton
          title="Add Property"
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
          handleClick={() => navigate("/properties/create")}
        />
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AllProperties;
