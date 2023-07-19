import { Routes } from "@angular/router";
import { URLEditorComponent } from "./urleditor/urleditor.component";
import { URLReaderComponent } from "./urlreader/urlreader.component";

export const routes: Routes = [
    { path: '', component: URLEditorComponent },
    { path: ':id', component: URLReaderComponent },
]