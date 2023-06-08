const express = require('express');

const exphbs = require('express-handlebars');
const app = express();
const session = require('express-session');
const port = 3001;
const indexRoutes = require('./routes/index');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/index');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error logging out:', err);
      res.render('error');
    } else {
      res.redirect('/login');
    }
  });
});
function formatDate(date) {
 
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  // Format the date using the options
  return date.toLocaleDateString(undefined, options);
}




// Configure Handlebars
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  helpers: {
    formatDate: formatDate // Register the helper function
  },
  // Disable strict mode for property access
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true
  }
}));
app.set('view engine', 'handlebars');


app.use(authRoutes);
app.use('/', indexRoutes);
app.use('/blog', blogRoutes);


app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.loggedInUser = req.session.user;
  }
  next();
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
