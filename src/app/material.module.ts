import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
    imports: [MatButtonModule, MatBadgeModule, ],
    exports: [MatButtonModule, MatBadgeModule, ]
})
export class MaterialModule {}