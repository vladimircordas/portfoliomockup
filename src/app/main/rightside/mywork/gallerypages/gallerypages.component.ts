import { Component, OnInit } from '@angular/core';

import { Page } from '../gallerypagesdefine/gallerypagesdefine.component';

export const PAGES: Page[] = [
  { name: 'WoodsCreative', id: "logos-btn", route: "./woodscreative" },
  { name: 'Nitea', id: "busi-btn", route: "./nitea" },
  { name: 'Meli Maya', id: "book-btn", route: "./melimaya" },
  { name: 'Escapeplan game', id: "illu-btn", route: "./escapeplan" },
  { name: 'Disney princess', id: "princess-btn", route: "./disneyprincesscastle" },
  { name: 'Old portfolio', id: "oldportfolio-btn", route: "./oldportfolio" },
  { name: 'Other work', id: "other-btn", route: "./otherwork" }
];
