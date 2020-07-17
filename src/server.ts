import { createServer } from 'http';

import app from './app';
import { sequelize } from './sequelize';

const port = process.env.PORT || 8000;

(async () => {
  await sequelize.sync({force: true}); // make force false, DB not drop the table

  createServer(app)
    .listen(
      port,
      () => console.info(`Server running on port ${port}`)
    );

})();
