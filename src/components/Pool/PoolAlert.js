import React, { useState } from 'react'

const PoolAlert = (props) => {
  const [selectedDiff, setSelectedDiff] = useState(props.beatmapset.difficulty);
  const [selectedMod, setSelectedMod] = useState(props.beatmapset.modifiers);
  const [selectedMap, setSelectedMap] = useState(props.beatmapset._id)
  const handleModChange = (event) => {
    const mod = event.target.value;
    setSelectedMod(mod);
  };

  const handleDiffChange = (event) => {
    const diff = event.target.value;
    setSelectedDiff(diff);
  };

  return (
    <div>
      <div>
        <span>Modifying the beatmap:</span>
        <p>Select a difficulty:</p>
        <select onChange={handleDiffChange}>
          {props.beatmapset.reference.beatmaps.map((diffs) => (
            <option
              key={diffs.version}
              value={diffs.version}
              label={diffs.version}
            ></option>
          ))}
        </select>
        <p>Select modifier:</p>
        <select value={selectedMod} onChange={handleModChange}>
          <option value="no_mod" label="No mods" />
          <option value="hard_rock" label="Hard Rock" />
          <option value="hidden" label="Hidden" />
          <option value="double_time" label="Double Time" />
          <option value="flashlight" label="Flashlight" />
          <option value="free_mods" label="Free Mods" />
          <option value="tie_breaker" label="Tie Breaker" />
        </select>
        <button
          onClick={() => {props.onModify(selectedMap, selectedDiff, selectedMod); props.onClose()}}
        >
          Yes
        </button>
        <button onClick={props.onClose}>No</button>
      </div>
    </div>
  );
}

export default PoolAlert
