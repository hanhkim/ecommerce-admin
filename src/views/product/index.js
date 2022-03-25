// material-ui
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import DataTable from 'ui-component/grid/DataTable';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Danh sách sản phẩm" secondary={<Button>Tạo sản phẩm</Button>}>
        <Typography variant="body2">Tất cả sản phẩm</Typography>
        <Box>
            <DataTable />
        </Box>
    </MainCard>
);

export default SamplePage;
