import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SelectWall({ customRotation, setCustomRotation }) {
  const walls = [
    {
      id: 1,
      title: "One",
      value: 10,
    },
    {
      id: 2,
      title: "Two",
      value: 80,
    },
    {
      id: 3,
      title: "Three",
      value: 25,
    },
    {
      id: 4,
      title: "Four",
      value: 140,
    },
  ];

  const mappedWalls = walls.map((item) => {
    return (
      <MenuItem key={item.id} value={item.value}>
        {item.title}
      </MenuItem>
    );
  });

  const changeRotation = (event) => {
    setCustomRotation(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="select-wall">Wall</InputLabel>
      <Select
        id="select-wall"
        label="Wall"
        labelId="select-wall"
        onChange={changeRotation}
        value={customRotation}
      >
        {mappedWalls}
      </Select>
    </FormControl>
  );
}

export default SelectWall;
