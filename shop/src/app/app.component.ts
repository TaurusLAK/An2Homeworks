import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Lorem ipsum dolor sit amet.";
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed aliquam metus. Suspendisse feugiat diam nisi, vitae pretium magna mattis vel. Nam laoreet ante eu magna convallis, euismod rhoncus est ornare. Morbi vestibulum, sem eget commodo elementum, tortor mauris feugiat lectus, ullamcorper pulvinar erat odio sit amet arcu. Integer eu scelerisque arcu. Donec suscipit arcu nunc, in egestas sapien finibus in. Praesent nisl tellus, fermentum et lorem non, consequat sodales ligula. Nunc porttitor aliquet ligula. In porta pulvinar erat. Integer venenatis hendrerit massa vitae auctor. Sed vel dui sollicitudin, accumsan massa ut, lacinia turpis. Pellentesque vel maximus dolor";
  price: number = 100;
  category: Category = Category.ELECTRONIC;
  isAvailable: boolean = true;

  equivalents: Array<string> = [
      "Lorem ipsum dolor #1",
      "Lorem ipsum dolor #2",
      "Lorem ipsum dolor #3",
      "Lorem ipsum dolor #4",
      "Lorem ipsum dolor #5"
    ]
}

enum Category {
  ELECTRONIC, MISCELLANEOUS
}
