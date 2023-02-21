// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./interfaces/IScoracle.sol";

contract MyContract {
    address constant SCORACLE_ADDRESS = 0xe953f329041dA0D5Cf23159abc4b45f6fbf8Ab17;

    constructor() {}

    // local implementation of score request
    function calculateMacroScore(
        bytes32 _scoreTypeJobId,
        bytes memory _userSignature
    ) external {
        IScoracle scoracle = IScoracle(SCORACLE_ADDRESS);
        scoracle.scoreRequest(msg.sender, _scoreTypeJobId, _userSignature);
    }

    // local implementation of get score
    function prequalifyUser(
        bytes32 _scoreTypeJobId
    ) public returns (bool prequalified, uint256 score) {

        IScoracle scoracle = IScoracle(SCORACLE_ADDRESS);
        IScoracle.ScoreData memory scoreData = scoracle.getScore(msg.sender, _scoreTypeJobId);

        prequalified = (scoreData.score > 650) ? true : false;

        return (prequalified, scoreData.score);
    }
}