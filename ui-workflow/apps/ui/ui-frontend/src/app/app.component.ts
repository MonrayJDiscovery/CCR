import {Component} from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  items: NbMenuItem[] = [
    {
      title: 'Workflow Pools',
      children: [
        {
          title: 'Query',
          link: 'pools-query'
        }
      ]
    },
    {
      title: 'Workflow Configuration',
      children: [
        {
          title: 'Workflow Pools',
          children: [
            {
              title: 'Maintain',
              link: 'pools-maintain'
            }
          ]
        },
        {
          title: 'Workflow Routes',
          children: [
            {
              title: 'Maintain',
              link: 'routes-maintain'
            }
          ]
        },
        {
          title: 'Workflow Rules',
          children: [
            {
              title: 'Maintain',
              link: 'rules-maintain'
            }
          ]
        }
      ]
    }
  ];
}
