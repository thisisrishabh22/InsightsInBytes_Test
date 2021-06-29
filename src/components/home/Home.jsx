import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import TopBar from "../topbar/TopBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Home(props) {
  const classes = useStyles();

  const cardDat = props.data.dat.map((item, pos) => {
    return (
      <div key={pos} className="col-md-4">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.imgUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Link style={{textDecoration:"none", color:"black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.head}
              </Typography>
              </Link>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Link to="/post" onClick={() => {props.onCardClick(pos)}}>
            <Button size="small" color="primary">
              Learn More
            </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  });

  return (
    <>
      <TopBar />
      <div className="wrapper">
        <div className="row">{cardDat}</div>
      </div>
    </>
  );
}