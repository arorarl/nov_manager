# manage.py

from flask_script import Manager, Server
from flask.ext.migrate import Migrate, MigrateCommand
from app import app, db

from app.models.user import User
from app.models.business import Business
from app.models.Chassis import Chassis
from app.models.Module import Module
from app.models.hardwareSetup import HardwareSetup
from app.models.hwchassismap import Hwchassismap
from app.models.hwchaschanmap import Hwchaschanmap
from app.models.channelsetup import Channelsetup
from app.models.quantity import Quantity
from app.models.unit import Unit
from app.models.project import Project




migrate = Migrate(app, db)
manager = Manager(app)

# migrations
manager.add_command('db', MigrateCommand)


@manager.command
def create_db():
    """Creates the db tables."""
    db.create_all()


@manager.command
def drop_db():
    """Drops the db tables."""
    db.drop_all()


@manager.command
def create_admin():
    """Creates the admin user."""
    db.session.add(User(email='ad@min.com', password='admin', admin=True))
    db.session.commit()


@manager.command
def create_data():
    """Creates sample data."""
    pass


if __name__ == '__main__':
    manager.run()
