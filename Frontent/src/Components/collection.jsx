import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import ClassIcon from "@mui/icons-material/Class";
const Collection = () => {
  return (
    <civ>
      <List>
        <ListItem>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary={"Book1"} secondary={""} />
        </ListItem>
      </List>
    </civ>
  );
};
export default Collection;
