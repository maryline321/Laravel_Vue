<template>

    <body id="page-top">
    
        <!-- Page Wrapper -->
        <div id="wrapper">
    
            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
                <!-- Sidebar - Brand -->
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Nenyon Media</div>
                </a>
    
                <!-- Divider -->
                <hr class="sidebar-divider my-0">
    
                <!-- Nav Item - Dashboard -->
                <li class="nav-item active">
                    
                        <router-link class="nav-link" :to="{name: 'app.dashboard'}">
                            <i class="fas fa-fw fa-tachometer-alt"></i><span>Dashboard</span></router-link>
                </li>
    
                <!-- Divider -->
                <hr class="sidebar-divider">
    
                <!-- Heading -->
                <div class="sidebar-heading">
                    Interface
                </div>
        
                <li class="nav-item">
    
                        <router-link class="nav-link" :to="{name: 'app.products'}">
                            <i class="fas fa-fw fa-table"></i><span>Products</span></router-link>
                </li>
                <li class="nav-item">
    
                    <router-link class="nav-link" :to="{name: 'app.orders'}">
                        <i class="fas fa-fw fa-table"></i><span>Orders</span></router-link>
            </li>
           
        <li class="nav-item">
    
            <router-link class="nav-link" :to="{name: 'app.reports'}">
                <i class="fas fa-fw fa-table"></i><span>Reports</span></router-link>
    </li>

                <!-- Divider -->
                <hr class="sidebar-divider d-none d-md-block">
    
                <!-- Sidebar Toggler (Sidebar) -->
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
    
    
            </ul>
            <!-- End of Sidebar -->

    
        </div>
        <!-- End of Page Wrapper -->
    
        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
    
    
    
    
    </body>
    
    </template>
    
    <style>
    #wrapper #content-wrapper {
        background-color: #f8f9fc;
        width: 100%;
        overflow-x: hidden;
    }
    
    
    body {
        margin-left: 0;
        line-height: 1.5;
    }
    </style>