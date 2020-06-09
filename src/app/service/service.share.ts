import { Injectable } from '@angular/core';
import { Menu } from 'src/app/models/model_menu';

@Injectable()
export class ShareService {
    public list: Menu[];
}
