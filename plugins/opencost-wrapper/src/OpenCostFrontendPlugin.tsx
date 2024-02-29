import React from 'react';
import { Route } from 'react-router';
import { SidebarItem } from '@backstage/core-components';
import {
    AppPluginInterface,
    AppRouteSurface,
    SidebarItemSurface,
} from '@vmware-tanzu/core-frontend';
import { OpenCostPage } from '@backstage/plugin-opencost';
import MoneyIcon from '@material-ui/icons/MonetizationOn';

export const OpenCostFrontendPlugin: AppPluginInterface = () => context => {
    context.applyTo(AppRouteSurface, routes =>
        routes.add(<Route path="/opencost" element={<OpenCostPage />} />),
    );

    context.applyTo(SidebarItemSurface, sidebar =>
        sidebar.addMainItem(
            <SidebarItem icon={MoneyIcon} to="opencost" text="OpenCost" />,
        ),
    );
};