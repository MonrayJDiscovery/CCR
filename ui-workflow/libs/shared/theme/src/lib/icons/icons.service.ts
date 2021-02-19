import {Injectable} from "@angular/core";
import {NbIconLibraries} from "@nebular/theme";

@Injectable()
export class IconsService {

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.setDefaultPack('eva')
  }
}
