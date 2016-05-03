import Helmet from 'react-helmet';
import Pineapple from './Pineapple';
import s from './style.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ErrorPage from './ErrorPage';

/* eslint no-script-url: false */
const Error404 = () => (
    <ErrorPage>
        <Helmet title="404 - VitaminJS" />
        <div className={s.pineapple}>
            4
            <Pineapple />
            4
        </div>
        <h1> Not Found </h1>
        <h2> We can't seem to find the page you asked </h2>
        <p>
            Maybe the resource you were looking for have been moved, or deleted.
            Maybe it has never existed. Anyway, you can
            always <a href="javascript:history.back()">go back</a> where you came
            from.
        </p>
    </ErrorPage>
);

export default withStyles(Error404, s);