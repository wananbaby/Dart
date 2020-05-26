import 'package:angular/angular.dart';

import 'src/todo_list/todo_list_component.dart';
import 'src/hero/hero.dart';

// AngularDart info: https://angulardart.dev
// Components info: https://angulardart.dev/components

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [TodoListComponent,HeroComponent],
)
class AppComponent {
  // Nothing here yet. All logic is in TodoListComponent.
}
