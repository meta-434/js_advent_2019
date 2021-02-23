const day_2_data = require('./day_2_data');

function day_2 (opCode, chunkPointer = 0) {
    // determine operation
    const chunk = opCode.slice(chunkPointer, chunkPointer + 4);
    switch(chunk[0]) {
        case (99):
            break;
        case (1): { // addition
            opCode[chunk[3]] = opCode[chunk[1]] + opCode[chunk[2]];
            day_2(opCode, chunkPointer + 4);
            break;
        }
        case (2): { // multiplication
            opCode[chunk[3]] = opCode[chunk[1]] * opCode[chunk[2]];
            day_2(opCode, chunkPointer + 4);
            break;
        }
        default: break;
    }
    return opCode;
}

day_2(day_2_data);

module.exports = day_2;