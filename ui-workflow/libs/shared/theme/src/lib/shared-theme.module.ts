import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CORPORATE_THEME, COSMIC_THEME, DARK_THEME, DEFAULT_THEME, NbIconModule, NbThemeModule} from "@nebular/theme";
import {IconsService} from "./icons/icons.service";
import {ThemeService} from "./services/theme.service";

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
  ],
  providers: [],
  exports: [
    NbIconModule
  ],
})
export class SharedThemeModule {
  static forRoot(defaultThemeName: string): ModuleWithProviders {
    return {
      ngModule: SharedThemeModule,
      providers: [
        ThemeService,
        IconsService,
        ...NbThemeModule.forRoot(
          {
            name: defaultThemeName,
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
        ).providers,
      ],
    };
  }
}
