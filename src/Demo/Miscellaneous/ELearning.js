import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import passport from "./passport.jpg";
import photo1 from "./photo3.jpg";
import photo2 from "./photo001.webp";
import photo3 from "./photo4.jpg";
import photo4 from "./photo5.jpg";
import photo5 from "./photo6.jpg";
import photo6 from "./photo.jpg";

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#fff",
	},
	hero: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photo6})`,
		height: "500px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		fontSize: "4rem",
		[theme.breakpoints.down("sm")]: {
			height: 300,
			fontSize: "3em",
		},
	},
	blogsContainer: {
		paddingTop: theme.spacing(3),
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: "100%",
	},
	media: {
		height: "240",
	},
	cardActions: {
		display: "flex",
		margin: "0 10px",
		justifyContent: "space-between",
	},
	author: {
		display: "flex",
	},
	paginationContainer: {
		display: "flex",
		justifyContent: "center",
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<AppBar className={classes.appBar} position="static">
				<Toolbar>
					<Typography variant="h6" color="primary">
						Blog
					</Typography>
				</Toolbar>
			</AppBar>
			<Box className={classes.hero}>
				<Box>React Blog</Box>
			</Box>
			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Typography variant="h4" className={classes.blogTitle}>
					Artcicles
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className={classes.media}
									image={photo1}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sodiq Demo Work
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src={passport} alt="" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="h2">
											Sodiq Akanmu
										</Typography>
										<Typography
											variant="subtitle2"
											color="text-secondary"
											component="h2"
										>
											Sep 23, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className={classes.media}
									image={photo2}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sodiq Demo Work
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src={passport} alt="" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="h2">
											Sodiq Akanmu
										</Typography>
										<Typography
											variant="subtitle2"
											color="text-secondary"
											component="h2"
										>
											Sep 23, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className={classes.media}
									image={photo3}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sodiq Demo Work
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src={passport} alt="" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="h2">
											Sodiq Akanmu
										</Typography>
										<Typography
											variant="subtitle2"
											color="text-secondary"
											component="h2"
										>
											Sep 23, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className={classes.media}
									image={photo4}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sodiq Demo Work
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src={passport} alt="" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="h2">
											Sodiq Akanmu
										</Typography>
										<Typography
											variant="subtitle2"
											color="text-secondary"
											component="h2"
										>
											Sep 23, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className={classes.media}
									image={photo5}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sodiq Demo Work
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src={passport} alt="" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="h2">
											Sodiq Akanmu
										</Typography>
										<Typography
											variant="subtitle2"
											color="text-secondary"
											component="h2"
										>
											Sep 23, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className={classes.media}
									image={photo6}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sodiq Demo Work
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src={passport} alt="" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="h2">
											Sodiq Akanmu
										</Typography>
										<Typography
											variant="subtitle2"
											color="text-secondary"
											component="h2"
										>
											Sep 23, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Box my={4} className={classes.paginationContainer}>
					<Pagination count={10} />
				</Box>
			</Container>
		</div>
	);
}

export default App;
