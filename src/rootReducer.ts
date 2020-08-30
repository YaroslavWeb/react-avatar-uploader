import { combineReducers } from 'redux';
import { avatarReducer } from './pages/Avatar/redux/reducer';

// Собираем все редусеры (я знаю что он один, но на всякий случаи)

export default combineReducers({
    avatarReducer
});