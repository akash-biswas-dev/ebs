package com.cromxt.ebs.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// @Entity
// @Getter
// @Setter
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
@Table(name = "workspace_rule")
public class WorkSpaceRule {

  // @Id
  // @GeneratedValue(strategy = GenerationType.IDENTITY)
  // public String getId() {
  // return this.workspace.getId() + "_" + this.name;
  // }

  // @Column(name = "rule_name")
  // private String name;

  // @ManyToOne
  // @JoinColumn(name = "workspace_id")
  // private WorkSpace workspace;

  // private String description;

  // @OneToOne
  // @JoinColumn(name = "created_by")
  // private UserModel created_by;

  // @OneToOne
  // @JoinColumn(name = "modified_by")
  // private UserModel modified_by;
}
