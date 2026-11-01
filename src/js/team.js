export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error(`Member ${newMember.name} is already in the team`);
    }
    this.members.add(newMember);
  }

  addAll(...newMembers) {
    newMembers.forEach((newMember) => this.members.add(newMember));
  }

  toArray() {
    return Array.from(this.members);
  }
}