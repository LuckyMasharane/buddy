import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { withTheme } from 'material-ui/styles';
import pic from '../images/images/01.jpg'

const base = 'http://api.rookies.co.za/api'
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 250,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class RecipeReviewCard extends Component {
  state = { expanded: false,
  product: [],
  discount: '0'
 };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    var options2 = { style: "currency", currency: "ZAR" };
    var options1 = { style: "percent" }; 
    const discount = parseInt(((this.state.product.price - this.state.product.promo_price)/this.state.product.price)*100);
    //const discount = parseInt((70/240)*100); //for demo

    console.log('id', this.state.product.image)
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar color={red} aria-label="Recipe" className={classes.avatar}>
                {discount}%
              </Avatar>
            }
            action={
              <Typography style={{color:'red'}}  >
               11km away
               </Typography>
            }
            subheader="Valid till February 14, 2018"
          />
          <CardMedia
            className={classes.media}
            image={"https://storage.googleapis.com/discountbuddy_products/" + this.state.product.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography  type="title" >
              {this.state.product.name}
            </Typography>
            <Typography style={{color:'red'}} type="headline" >
              {new Intl.NumberFormat("ar-SA", options2).format(this.state.product.promo_price)}
            </Typography>
            <Typography style={{textDecoration:'line-through'}} type="caption" >
            was {new Intl.NumberFormat("ar-SA", options2).format(this.state.product.price)}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon style={{color:'red'}} />
            </IconButton>
            <IconButton style={{color:'red'}} aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Reviews:
              </Typography>
              <Typography paragraph>
                Mosima: what a good discount
              </Typography>
              <Typography paragraph>
                Tsibiso: So expensive
              </Typography>
              <Typography paragraph>
                Ndumiso: I love it
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
  async _getProduct(){
    let response = await fetch(base+'/product/'+this.props.productId);
    let result = await response.json();

    this.setState({
      product: result,
      discount : parseInt((this.state.product.promo_price/this.state.product.price)*100)
    }, ()=>{console.log('mara',this.state.product)}
  );
  }
  
  componentDidMount(){
    this._getProduct();
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);