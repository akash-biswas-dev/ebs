package com.cromxt.ebs.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "workspaces")
public class WorkSpace {

  @Id
  public String getId() {
    return this.userId.getId() + "_" + this.workspaceName;
  }

  public void setId(String id) {
    String[] parts = id.split("_");
    this.userId = UserModel.builder().id(parts[0]).build();
    this.workspaceName = parts[1];
  }

  public static String generateId(String userId, String workspaceName) {
    return userId + "_" + workspaceName;
  }

  @Column(name = "workspace_name")
  private String workspaceName;

  @Column(name = "profile_image")
  private String profileImage;

  private String description;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private UserModel userId;

}
