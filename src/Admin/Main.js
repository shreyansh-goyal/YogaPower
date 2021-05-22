import React from 'react';
import ContestCard from '../Shared/TournamentCard';
import AdminHeader from './Header';
import {useState} from 'react';
const AdminMain = ({history}) => {
    const [tournaments, setTournaments] = useState(["A", "B", "C", "D"]);
    return(
        <div>
            <AdminHeader/>
            {tournaments.map(t=>{
                    return(
                        <ContestCard tournamentName={t} className="tournament-card"/>
                    )
            })}

        </div>
    )
}
export default AdminMain;