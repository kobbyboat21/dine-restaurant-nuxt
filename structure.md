~/
    - components/
        - util/
            - navbars/
                Side.vue > < UtilNavbarSide />
            - backgrounds/
                BlurryRestaurant > <UtilBackgroundsBlurryRestaurant />
            - charts/
                Bar.vue > < UtilChartsBar /> -- general bar chart for use in all domain components
                Line.vue
                Pie.vue
            - DataTable.vue
        - views/
            - Menu.vue > <ViewsMenu /> -- high level component for the menu page view - to be called inside pages/
            - Bookings/
                - Page.vue > <ViewsBookingsPage /> 
                    - DashboardBookingsDataTable.vue 
        - dashboard/
            - menu/
                - breakfast/
                    - DataTable.vue
                    - DataTableMobile.vue
                    - modals/
                        - Create.vue > <DashboardMenuBreakfastModalsCreate /> -- modal made specifically for use in the menu/breakfast page
                        - Edit.vue
                        - Delete.vue
                - lunch/
                - dinner/
            - bookings/
                - DataTable.vue - customised data table towards bookings
            - inventory/
            - tasks/
    - pages/
    - stores/
