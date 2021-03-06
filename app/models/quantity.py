from app import db

class Quantity(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    
    name = db.Column(db.String(30))
    

    def to_dict(self):
        return dict(
            name = self.name,
            id = self.id
        )

    def __repr__(self):
        return '<Quantity %r>' % (self.id)
