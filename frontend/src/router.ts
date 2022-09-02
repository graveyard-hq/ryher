import { Response, Router } from 'express';
import fs from 'fs';

const router = Router();

router.get('/', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/index.html');
});

router.get('/partial', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/partial/index.html');
});

router.get('/view-notes', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/view-notes.html');
});

router.get('/partial/view-notes', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/partial/view-notes.html');
});

router.get('/settings', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/settings.html');
});

router.get('/partial/settings', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/partial/settings.html');
});

router.get('/create-note', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/create-note.html');
});

router.get('/partial/create-note', (_: any, res: Response) => {
  res.sendFile(__dirname + '/routes/partial/create-note.html');
});

router.get('/cdn/css', (_: any, res: Response) => {
  res.header('Content-Type', 'text/css')
    .send(fs.readFileSync(__dirname + '/routes/cdn/css/global.css', {
            encoding: 'utf-8'
          }) +
          fs.readFileSync(__dirname + '/routes/cdn/css/classes.css', {
            encoding: 'utf-8'
          }) +
          fs.readFileSync(__dirname + '/routes/cdn/css/misc.css', {
            encoding: 'utf-8'
          })
         );
});

router.get('/cdn/js', (_: any, res: Response) => {
  res.header('Content-Type', 'text/javascript')
    .send(fs.readFileSync(__dirname + '/routes/cdn/js/reva-ui.min.js', {
            encoding: 'utf-8'
          }) +
          fs.readFileSync(__dirname + '/routes/cdn/js/page-loader.js', {
            encoding: 'utf-8'
          }) +
          fs.readFileSync(__dirname + '/routes/cdn/js/api-wrapper.js', {
            encoding: 'utf-8'
          }) +
          fs.readFileSync(__dirname + '/routes/cdn/js/navbar.js', {
            encoding: 'utf-8'
          })
         );
});

router.get('*', (_: any, res: Response) => {
  res.status(404)
    .header('Content-Type', 'text/html')
    .send('<html style="background-color: black;"><head><title>404 not found</title></head><body><h1 style="color: white;">404 not found</h1></body</html>');
});

export default router;
