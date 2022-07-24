import react from "react";
import Post from "../../components/Post/Post";
import Button from "../../components/FormElements/Button/Button";
import Input from "../../components/FormElements/Input/Input";
import PersonIcon from "@mui/icons-material/Person";
import {Link} from "react-router-dom";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../util/validators";
import "./Reply.css";
import { useForm } from "../../hooks/form-hook";

const Reply = () => {

    const [formState, inputHandler] = useForm({
      post: {
        value: "",
        isValid: false,
      },
    }, false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    
    return (
      <div className="post-section">
        <div className="post-main">
          <div>
            <Link to="/profile/0" className="profile-information">
              <img
                className="profile-picture"
                src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
                alt="test"
              />
              <div>
                <h3>Kakarot</h3>
                <div className="profile-username">
                  <PersonIcon></PersonIcon>
                  <p>Goku</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-description">
            <p className="edit-time">2 second ago</p>
            <p className="edit-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
              <br />
              <br /> How to cook a pasta:
              <br /> Step 1: Boil Water Start with a very large pot of water,
              about 6 quarts per pound of pasta. Bring it to a rapid boil. Tip:
              A pound of pasta feeds about 5 to 6 people.
              <br />
              Step 2: AddSalt Put in a lot of salt, about 3 tablespoons. If you
              taste the water, it should taste like the sea. <br /> Step 3: Add
              the Pasta Drop in the pasta while the water is at a boil and give
              it a gentle stir.
              <br /> Step 4: Stir Stir it occasionally while it cooks. Use the
              cooking time on the pasta package as a guide. <br />
              Step 5: Taste the Pasta But watch out — it's hot! Sample the pasta
              at about 2 minutes shy of the indicated time. It should be al
              dente. You'll finish cooking it in the sauce. Tip: "Al dente"
              means "to the tooth," meaning the pasta should still have a little
              bite to it.
            </p>
          </div>
        </div>
        {/* {"ini nanti jadi array"} */}
        <Post />
        {/* <Post /> */}
        <div className="post-form">
          <div className="post-decor">
            <h3>Say Something...</h3>
          </div>
          <form onSubmit={submitHandler}>
            <Input
              id="post"
              element="textarea"
              type="text"
              placeholder="Create a post"
              rows={6}
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <div className="submit-button">
              <Button size="big" register={true} disabled={!formState.isValid}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Reply;