import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  constructor() {
    document.addEventListener("keydown", this.up);
  
  document.addEventListener("keydown", this.backspace);
  document.addEventListener("keypress", this.key);
  document.addEventListener("DOMContentLoaded", this.app);
   }

  ngOnInit(): void {
  }
  userInput;
  terminalOutput;
  projAsk = false;
  lastCommands = [];

  COMMANDS = {
    n: "OK",
    no: "OK",
    about:
      "Hello, my name is Rushi Panchariya. I'm always excited to work on new technologies and learn more about them. I am excited to work on a project that will benefit the community and assist them address their difficulties in whatever manner possible. When I'm working on a project, a concept, or a task, I'm always intrigued about the outcome. Feel free to visit my <a href ='https://github.com/imrushi' target='_blank' class='teal-head'> Github.",
    // ls:
    //   "usr&nbsp;&nbsp;&nbsp;&nbsp;home&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;&nbsp;&nbsp;&nbsp;root",
    help:
      'Supported commands: <span class="code">about</span>, <span class="code">contact</span>, <span class="code">info</span>, <span class="code">games</span><br>System commands: <span class="code">clear</span>, <span class="code">history</span><br>Tip: Use Up / Down arrow to go through recent commands',
    info:
      "<span class='aboutHead'>Name:</span> Rushi Panchariya<br><span class='aboutHead'>Location:</span> India<br><span class='aboutHead'>Favourites:</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Os</span>: Linux, Windows&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Editor</span>: Vs Code,Vim<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Version Control</span>: Git<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Tabs or Spaces</span>: Depends usually <i>Tabs</i><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Language</span>: <i>Golang</i><br>",
    contact:
      "Email : <a class='link' href='mailto:rushipanchariya19@gmail.com'>rushipanchariya19@gmail.com</a><br>Twitter: <a href='https://twitter.com/RushiPanchariya' class='link'> @RushiPanchariya</a><br>LinkedIn: <a href='https://www.linkedin.com/in/rushi-panchariya/' class='link'> Rushi Panchariya</a><br>",
    games: "<span class='aboutTail'>Valorant</span> & any game with excellent graphics and a fantastic story, such as <span class='aboutTail'>The Last of Us</span>."
  };

  app = () => {
    this.userInput = document.getElementById("userInput");
    this.terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard");
    console.log("Application loaded");
  };

  execute = function executeCommand(input) {
    input = input.toLowerCase();
    this.lastCommands.push(input);
    let output;
    if (input.length === 0) {
      return;
    }
    if (input.indexOf("sudo") >= 0) {
      input = "sudo";
    }
  
    if (input == "projects") {
      open("pages/projects.html");
    } else if (input === "clear" || input === "cls") {
      this.clearScreen();
    } else if (input === "history") {
      this.showHist();
    } else if (input === "github") {
      open("https://github.com/Aayush9029");
    } else {
      output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
      if (!this.COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">command not found: ${input}</div>`;
      } else {
        output += this.COMMANDS[input];
      }
  
      this.terminalOutput.innerHTML = `${this.terminalOutput.innerHTML}<br><div class="terminal-line">${output}<br></div>`;
      this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    }
  };
  
  key = (e) => {
    const input = this.userInput.innerHTML;
  
    if (e.key === "Enter") {
      this.execute(input);
      this.userInput.innerHTML = "";
      return;
    }
  
    this.userInput.innerHTML = input + e.key;
  };
  
  backspace = (e) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      return;
    }
    this.userInput.innerHTML = this.userInput.innerHTML.slice(
      0,
      this.userInput.innerHTML.length - 1
    );
  };
  
  showHist() {
    this.terminalOutput.innerHTML = `${
      this.terminalOutput.innerHTML
    }<div class="terminal-line">${this.lastCommands.join(", ")}</div>`;
  }
  
  iter = 0;
  up = (e) => {
    if (e.key === "ArrowUp") {
      if (this.lastCommands.length > 0 && this.iter < this.lastCommands.length) {
        this.iter += 1;
        this.userInput.innerHTML = this.lastCommands[this.lastCommands.length - this.iter];
      }
    }
  
    if (e.key === "ArrowDown") {
      if (this.lastCommands.length > 0 && this.iter > 1) {
        this.iter -= 1;
        this.userInput.innerHTML = this.lastCommands[this.lastCommands.length - this.iter];
      }
    }
  };
  
  clearScreen() {
    location.reload();
  }
  
}
