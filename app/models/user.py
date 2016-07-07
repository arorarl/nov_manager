from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    
    username = db.Column(db.String(30))
    
    password = db.Column(db.String(30))
    
    contact_email = db.Column(db.String(50))
    

    def to_dict(self):
        return dict(
            username = self.username,
            password = self.password,
            contact_email = self.contact_email,
            id = self.id
        )

    def __repr__(self):
        return '<User %r>' % (self.id)
