import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './team/team.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { ProfitCardComponent } from '../e-commerce/profit-card/profit-card.component';
import { EarningCardComponent } from '../e-commerce/earning-card/earning-card.component';
import { CountryOrdersComponent } from '../e-commerce/country-orders/country-orders.component';
import { ECommerceProgressSectionComponent } from '../e-commerce/progress-section/progress-section.component';
import { TrafficRevealCardComponent } from '../e-commerce/traffic-reveal-card/traffic-reveal-card.component';
import { ECommerceComponent } from '../e-commerce/e-commerce.component';
import { StatsCardFrontComponent } from '../e-commerce/profit-card/front-side/stats-card-front.component';
import { StatsAreaChartComponent } from '../e-commerce/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from '../e-commerce/profit-card/front-side/stats-bar-animation-chart.component';
import { ECommerceChartsPanelComponent } from '../e-commerce/charts-panel/charts-panel.component';
import { ChartPanelHeaderComponent } from '../e-commerce/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from '../e-commerce/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { OrdersChartComponent } from '../e-commerce/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from '../e-commerce/charts-panel/charts/profit-chart.component';
import { StatsCardBackComponent } from '../e-commerce/profit-card/back-side/stats-card-back.component';
import { TrafficBarChartComponent } from '../e-commerce/traffic-reveal-card/back-side/traffic-bar-chart.component';
import { TrafficFrontCardComponent } from '../e-commerce/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBackCardComponent } from '../e-commerce/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarComponent } from '../e-commerce/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { EarningLiveUpdateChartComponent } from '../e-commerce/earning-card/front-side/earning-live-update-chart.component';
import { EarningPieChartComponent } from '../e-commerce/earning-card/back-side/earning-pie-chart.component';
import { EarningCardBackComponent } from '../e-commerce/earning-card/back-side/earning-card-back.component';
import { EarningCardFrontComponent } from '../e-commerce/earning-card/front-side/earning-card-front.component';
import { SlideOutComponent } from '../e-commerce/slide-out/slide-out.component';
import { ECommerceUserActivityComponent } from '../e-commerce/user-activity/user-activity.component';
import { ECommerceLegendChartComponent } from '../e-commerce/legend-chart/legend-chart.component';
import { ECommerceVisitorsStatisticsComponent } from '../e-commerce/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceVisitorsAnalyticsChartComponent } from '../e-commerce/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { ECommerceVisitorsAnalyticsComponent } from '../e-commerce/visitors-analytics/visitors-analytics.component';
import { TrafficCardsHeaderComponent } from '../e-commerce/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { CountryOrdersMapComponent } from '../e-commerce/country-orders/map/country-orders-map.component';
import { CountryOrdersChartComponent } from '../e-commerce/country-orders/chart/country-orders-chart.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersMapService } from '../e-commerce/country-orders/map/country-orders-map.service';
import { MapsModule } from '../maps/maps.module';
import { SearchMapComponent } from './search-map/search-map.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    LeafletModule,
    MapsModule
    
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
    SearchMapComponent
    
   ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class DashboardModule { }
