import * as React from "react";
import {
    Box,
    Button,
    Card,
    Chip,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Layout from "@/components/Layouts/Layout";
import {
    DataGrid,
    GridColumns,
    GridRowsProp,
    GridEditSingleSelectCell,
    GridEditSingleSelectCellProps,
    useGridApiContext,
} from "@mui/x-data-grid";
import { randomPrice } from "@mui/x-data-grid-generator";

type Props = {};

// const CustomChip = ({ label:any, onDelete:any }) => {
//   return (
//     <Chip
//       variant="outlined"
//       color="secondary"
//       label={label}
//       onDelete={onDelete}
//     />
//   );
// };

// // Here is the custom filter list component that will display
// // the custom filter chips:
// const CustomFilterList = (Props) => {
//   return <TableFilterList {...Props} ItemComponent={CustomChip} />;
// };

 

const rows: GridRowsProp = [
    {
        id: 1,
        description: "Light bill",
        value: randomPrice(0, 1000),
        type: "Expense",
        account: "Utilities",
    },
    {
        id: 3,
        description: "Order #5",
        value: randomPrice(0, 1000),
        type: "Income",
        account: "Sales",
    },
    {
        id: 4,
        description: "Google AdSense",
        value: randomPrice(0, 1000),
        type: "Income",
        account: "Ads",
    },
];

const CustomTypeEditComponent = (props: GridEditSingleSelectCellProps) => {
    const apiRef = useGridApiContext();

    const handleValueChange = async () => {
        await apiRef.current.setEditCellValue({
            id: props.id,
            field: "account",
            value: "",
        });
    };

    return (
        <GridEditSingleSelectCell
            onValueChange={handleValueChange}
            {...props}
        />
    );
};

const CustomTypeEditComponent2 = (props: GridEditSingleSelectCellProps) => {
  const apiRef = useGridApiContext();

  const handleValueChange = async () => {
      await apiRef.current.setEditCellValue({
          id: props.id,
          field: "account",
          value: "",
      });
  };

  return (
      <GridEditSingleSelectCell
          onValueChange={handleValueChange}
          {...props}
      />
  );
};

export default function LinkedFieldsRowEditing() {
    const columns: GridColumns = [
        {
            field: "description",
            headerName: "Description",
            width: 160,
            editable: true,
        },
        {
            field: "value",
            headerName: "Value",
            type: "number",
            width: 120,
            editable: true,
        },
        {
            field: "type",
            headerName: "Type",
            type: "singleSelect",
            valueOptions: ["Income", "Expense"],
            width: 120,
            editable: true,
            renderEditCell: (params) => <CustomTypeEditComponent {...params} />,
        },
        
    ];

    return (
        <Layout>
            <Stack>
                <Card
                    sx={{
                        margin: "10",
                        padding: "30px 25px",
                        textTransform: "capitalize",
                    }}>
                    <Stack spacing={2}>
                        <Typography text-align='left' variant='h5'>
                            ตั้งต่าการทดสอบ
                        </Typography>
                        <Box sx={{ width: "100%", height: 300 }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                editMode='row'
                                experimentalFeatures={{ newEditingApi: true }}
                            />
                        </Box>
                    </Stack>
                </Card>
            </Stack>
        </Layout>
    );
}
