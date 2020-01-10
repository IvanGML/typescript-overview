import { Router, Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if(req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not permitted.');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
    if( req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <span>You are logged in</span>
                <a href="/logout">Logout</a>
            </div>
        `);
    } else {
        res.send(`
        <div>
            <span>You are not logged in</span>
            <a href="/login">Login</a>
        </div>
    `);
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = { loggedIn: false }
    res.redirect('/')
})

router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label for="email">Email</label>
                <input id="email" type="text" name="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" type="password" name="password">
            </div>
            <button>Login</button>
        </form>
    `);
});

router.post('/login', (req: Request, res: Response) => {
    const { email, password} = req.body;

    const credentials = {
        email: 'somovlife@gmail.com',
        pass: '1111'
    }

    if (email && password && email === credentials.email && password === credentials.pass) {
        req.session = { loggedIn: true };
        res.redirect('/')
    } else {
        res.send('Invalid email or password.')
    }
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route!');
})

export { router };