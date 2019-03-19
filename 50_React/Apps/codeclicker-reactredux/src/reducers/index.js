import {WorkersInGame} from "../components/logic/Worker";
import {CountersInGame} from "../components/logic/Counter";
import {BoostersInGame} from "../components/logic/Booster";
import {ProducersInGame} from "../components/logic/Producer";
import { ticksPerSec } from "../components/data/GameData";

const initialGameState = {
    counters : new CountersInGame() , 
    producers : new ProducersInGame(), 
    workers :  new WorkersInGame(), 
    boosters : new BoostersInGame() 
};

const gameReducer = (state = initialGameState, action) => {
    let newCounters = state.counters;
    let newProducers = state.producers;
    let newWorkers = state.workers;
    let newBoosters = state.boosters;

    if (action.type === 'CODE_CLICK') { 
        newCounters = newCounters.clone();
        newProducers = newProducers.clone();

        let locsProduced = newProducers.clickProducer.locsPerActivation();

        newProducers.clickProducer.activationsAllTime++;
        newCounters.locsInBank += locsProduced;
        newCounters.locsAllTime += locsProduced;
    }

    if (action.type === 'TICK_EVENT') { 
        newCounters = newCounters.clone();

        let locsCreatedInTick = newWorkers.getTotalLOCS(newBoosters) / ticksPerSec;

        newCounters.locsInBank += locsCreatedInTick;
        newCounters.locsAllTime += locsCreatedInTick;
    }

    if (action.type === 'BUY_WORKER') 
    { 
        newCounters = newCounters.clone();
        newWorkers = newWorkers.clone();

        let targetWorker = newWorkers.workersInGame.find(elem => elem.workerType === action.payload)

        if (targetWorker)  {
            newCounters.locsInBank -= targetWorker.getPrice(); 
            targetWorker.noOwned += 1;
        }
    }

    if (action.type === 'BUY_BOOSTER') 
    {
        newCounters = newCounters.clone();
        newBoosters = newBoosters.clone();

        let targetBooster = newBoosters.boostersInGame.find(elem => elem.boosterType === action.payload)

        if (targetBooster)  { 
            newCounters.locsInBank -= targetBooster.price; 
            targetBooster.owned = true;
        }
    }

    return { counters : newCounters, producers : newProducers, workers :  newWorkers, boosters : newBoosters };
};

export default gameReducer;
