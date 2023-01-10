import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";

//CMS

import CMSHome from "@/views/cms/CMSHome.vue";
import Pages from "@/views/cms/Pages.vue";
import Media from "@/views/cms/Media.vue";
import Articles from "@/views/cms/Articles.vue";
import Menus from "@/views/cms/Menus.vue";

// CMS - SETTINGS

import Settings from "@/views/main/Settings.vue";
import Company from "@/views/main/settings/Company.vue";
import Import from "@/views/main/settings/Import.vue";
import Prices from "@/views/main/settings/Prices.vue";
import ShippingSettings from "@/views/main/settings/Shipping.vue";
import PaymentsSettings from "@/views/main/settings/Payments.vue";
import LoyalitySettings from "@/views/main/settings/Loyality.vue";
import Compare from "@/views/main/settings/Compare.vue";
import Texts from "@/views/main/settings/Texts.vue";
import Banners from "@/views/main/settings/Banners.vue";
import Users from "@/views/main/settings/Users.vue";
import Numerals from "@/views/main/settings/Numerals.vue";
import Webpages from "@/views/main/settings/Webpages.vue";
import System from "@/views/main/settings/System.vue";

// UPDATE & MARKETING

import Update from "@/views/main/Update.vue";
import Marketing from "@/views/main/Marketing.vue";
import Account from "@/views/main/Account.vue";

// MODALS - CONTENT

import AddPage from "@/components/cms/pages/AddPage";
import EditPage from "@/components/cms/pages/EditPage";
import DeletePage from "@/components/cms/pages/DeletePage";
import AddArticle from "@/components/cms/articles/AddArticle";
import EditArticle from "@/components/cms/articles/EditArticle";
import DeleteArticle from "@/components/cms/articles/DeleteArticle";
import AddMenu from "@/components/cms/menus/AddMenu";
import EditMenu from "@/components/cms/menus/EditMenu";
import DeleteMenu from "@/components/cms/menus/DeleteMenu";
import AddMedia from "@/components/cms/media/AddMedia";
import EditMedia from "@/components/cms/media/EditMedia";
import DeleteMedia from "@/components/cms/media/DeleteMedia";

// ESHOP

import Eshop from "@/views/e-shop/Eshop.vue";
import Customers from "@/views/e-shop/Customers.vue";
import Warehouse from "@/views/e-shop/Warehouse.vue";
import Orders from "@/views/e-shop/Orders.vue";
import Invoices from "@/views/e-shop/Invoices.vue";
import Complaints from "@/views/e-shop/Complaints.vue";
import Payments from "@/views/e-shop/Payments.vue";
import Shipping from "@/views/e-shop/Shipping.vue";
import Loyality from "@/views/e-shop/Loyality.vue";
import Stats from "@/views/main/Stats.vue";

const routes = [
  // LOGIN

  { path: "/login", name: "Login", component: Login },

  // CMS

  { path: "/dashboard", name: "CMSHome", component: CMSHome, },
  {
    path: "/pages",
    name: "Pages",
    component: Pages,
    children: [
      { path: "/pages/add/", component: AddPage },
      { path: "/pages/edit/", component: EditPage },
      { path: "/pages/delete/", component: DeletePage },
    ],
  },
  {
    path: "/media",
    name: "Media",
    component: Media,
    children: [
      { path: "/media/add/", component: AddMedia },
      { path: "/media/edit/", component: EditMedia },
      { path: "/media/delete/", component: DeleteMedia },
    ],
  },

  {
    path: "/articles",
    name: "Articles",
    component: Articles,
    children: [
      { path: "/articles/add/", component: AddArticle },
      { path: "/articles/edit/", component: EditArticle },
      { path: "/articles/delete/", component: DeleteArticle },
    ],
  },
  {
    path: "/menus",
    name: "Menus",
    component: Menus,
    children: [
      { path: "/menus/add/", component: AddMenu },
      { path: "/menus/edit/", component: EditMenu },
      { path: "/menus/delete/", component: DeleteMenu },
    ],
  },

  // ESHOP

  { path: "/eshop", name: "Eshop", component: Eshop },
  { path: "/customers", name: "Customers", component: Customers },
  { path: "/warehouse", name: "Warehouse", component: Warehouse },
  { path: "/orders", name: "Orders", component: Orders },
  { path: "/invoices", name: "Invoices", component: Invoices },
  { path: "/complaints", name: "Complaints", component: Complaints },
  { path: "/payments", name: "Payments", component: Payments },
  { path: "/shipping", name: "Shipping", component: Shipping },
  { path: "/loyality", name: "Loyality", component: Loyality },
  { path: "/stats", name: "Stats", component: Stats },
  { path: "/settings", name: "Settings", component: Settings },

  // SETTINGS

  {
    path: "/settings",
    component: Settings,
    children: [
      { path: "/settings/company", component: Company, alias: "/settings" },
      { path: "/settings/import/", component: Import, alias: "/settings" },
      { path: "/settings/prices/", component: Prices, alias: "/settings" },
      {
        path: "/settings/shipping/",
        component: ShippingSettings,
        alias: "/settings",
      },
      {
        path: "/settings/payments/",
        component: PaymentsSettings,
        alias: "/settings",
      },
      {
        path: "/settings/loyality/",
        component: LoyalitySettings,
        alias: "/settings",
      },
      { path: "/settings/compare/", component: Compare, alias: "/settings" },
      { path: "/settings/texts/", component: Texts, alias: "/settings" },
      { path: "/settings/banners/", component: Banners, alias: "/settings" },
      { path: "/settings/users/", component: Users, alias: "/settings" },
      { path: "/settings/numerals/", component: Numerals, alias: "/settings" },
      { path: "/settings/webpages/", component: Webpages, alias: "/settings" },
      { path: "/settings/system/", component: System, alias: "/settings" },
    ],
  },

  // UPDATE & MARKETING & ACCOUNT

  { path: "/update", name: "Update", component: Update },
  { path: "/marketing", name: "Marketing", component: Marketing },
  { path: "/account", name: "Account", component: Account },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
