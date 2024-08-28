import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Grid2 from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

export const AppToolbar = () => {

    const cards = [
        { title: 'Farine', subtitle: '2 Kilos' },
        { title: 'Lait', subtitle: '6 Litres' },
        { title: 'Ratatouille', subtitle: '3 Boites' },
    ];

    return (
        <div>
            {/* AppBar Section */}
            <AppBar container spacing={2} padding={2} style={{ marginTop: 16 }} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Courses
                    </Typography>
                    <Fab color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Toolbar>
            </AppBar>
            
            {/* Text Section */}
            <TextField 
                container spacing={2} 
                padding={2} 
                style={{ marginTop: 16, backgroundColor: '#FFF59D' }}
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Texte"
                variant="filled">
            </TextField>
            
            <Fab spacing={6} padding={6} style={{ marginTop: 16, marginBottom: 20 }} color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
            
            {/* Grid2 Section with Cards */}
            <Grid2 container spacing={2} padding={2} style={{ marginTop: 16 }}>
                {cards.map((card, index) => (
                    <Grid2 item xs={12} sm={4} key={index}>
                        <Card style={{ backgroundColor: '#FFF59D' }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {index}. {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.subtitle}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default AppToolbar;
