// no-restricted-import кидает ошибку
import moment from 'moment';
// При этом, local/no-restricted-import кидает предупреждение
import _ from 'lodash';

const items = [1, 2, 3];

// no-restricted-syntax от airbnb кидает ошибку
for (const key of items) {
  moment(key);
}

// Тут уже местный local/no-restricted-syntax кидает ошибку
if (Math.random() > 0.5) {
  _.noop();
}

// Здесь ошибку кидает наш кастомный local/no-null
_.noop({ a: null });
