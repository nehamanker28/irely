import { Injector } from '@angular/core';
import { Events } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

import { Message } from '../../common/message';

export interface PageEdit {
    message: Message;
    events: Events;
    injector: Injector;
    
    form: FormGroup;
    mode: string;

    load: () => void;
    submit: () => void;
}