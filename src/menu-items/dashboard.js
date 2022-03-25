// assets
import { IconDashboard, IconBrandProducthunt, IconBuildingFactory } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'product',
            title: 'Sản phẩm',
            type: 'item',
            url: '/sanpham',
            icon: IconBrandProducthunt,
            breadcrumbs: false
        },
        {
            id: 'category',
            title: 'Loại sản phẩm',
            type: 'item',
            url: '/loai-san-pham',
            icon: IconBuildingFactory,
            breadcrumbs: false
        },
        {
            id: 'order',
            title: 'Đơn hàng',
            type: 'collapse',
            url: '/don-hang',
            icon: IconBuildingFactory,
            breadcrumbs: false,

            children: [
                {
                    id: 'orderAll',
                    title: 'Tất cả',
                    type: 'item',
                    url: '/don-hang'
                },
                {
                    id: 'orderNot',
                    title: 'Chưa hoàn tất',
                    type: 'item',
                    url: '/don-hang/chua-hoan-tat'
                }
            ]
        },
        {
            id: 'customer',
            title: 'Khách hàng',
            type: 'item',
            url: '/khach-hang',
            icon: IconBuildingFactory,
            breadcrumbs: false
        },
        {
            id: 'promotion',
            title: 'Khuyến mãi',
            type: 'item',
            url: '/khuyen-mai',
            icon: IconBuildingFactory,
            breadcrumbs: false
        },
        {
            id: 'report',
            title: 'Báo cáo',
            type: 'item',
            url: '/bao-cao',
            icon: IconBuildingFactory,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
