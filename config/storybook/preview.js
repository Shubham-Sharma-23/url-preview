import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { setConsoleOptions } from '@storybook/addon-console';
// import '../src/html/styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

addDecorator(withInfo);

setConsoleOptions({
    panelExclude: [],
});