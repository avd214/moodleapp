// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injector, NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';

import { CoreSharedModule } from '@/core/shared.module';
import { AddonBlogEntriesPage } from './pages/entries/entries';
import { CoreCommentsComponentsModule } from '@features/comments/components/components.module';

import { CoreTagComponentsModule } from '@features/tag/components/components.module';
import { buildTabMainRoutes } from '@features/mainmenu/mainmenu-tab-routing.module';

function buildRoutes(injector: Injector): Routes {
    return [
        ...buildTabMainRoutes(injector, {
            component: AddonBlogEntriesPage,
        }),
    ];
}

@NgModule({
    imports: [
        CoreSharedModule,
        CoreCommentsComponentsModule,
        CoreTagComponentsModule,
    ],
    exports: [RouterModule],
    providers: [
        {
            provide: ROUTES,
            multi: true,
            deps: [Injector],
            useFactory: buildRoutes,
        },
    ],
    declarations: [
        AddonBlogEntriesPage,
    ],
})
export class AddonBlogLazyModule {}