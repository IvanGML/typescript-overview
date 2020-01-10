import {User} from './User';
import {Company} from './Company';
import { CustomMap } from './CustomMap';

const Map = new CustomMap('map_anchor');
Map.addMarker(new Company);
Map.addMarker(new User);
