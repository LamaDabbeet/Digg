import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

const alertSubject = new Subject();
const defaultId = 'default-alert';

export const alertService = {
    onAlert,
    success,
    error,
    alert,
    clear
};

export const AlertType = {
    Success: 'Success',
    Error: 'Error',
}

// enable subscribing to alerts observable
function onAlert(id = defaultId) {
    return alertSubject.asObservable().pipe(filter(x => x && x.id === id));
}

// convenience methods
function success(message, options) {
    alert({ ...options, type: AlertType.Success, message });
}

function error(message, options) {
    alert({ ...options, type: AlertType.Error, message });
}


// core alert method
function alert(alert) {
    alert.id = alert.id || defaultId;
    alertSubject.next(alert);
}

// clear alerts
function clear(id = defaultId) {
    alertSubject.next({ id });
}